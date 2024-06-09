<script setup>
import { useUrlSearchParams, useDebounceFn } from '@vueuse/core'
import { router, useForm } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib'

import Layout from '@/layouts/default.vue'

import { CalendarIcon }     from '@radix-icons/vue'

import Preview       from '@/components/modals/Preview.vue'
import Gallery  from './components/Gallery.vue'

import { Announcement }     from '@/components/ui/announcement'
import { ErrorLabel }       from '@/components/ui/error-label'
import { RangeCalendar }    from '@/components/ui/range-calendar'
import { Input }            from '@/components/ui/input'
import { Button }           from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    parseDate,
    DateFormatter,
    getLocalTimeZone,
    now,
} from '@internationalized/date'
import { 
    Popover, 
    PopoverContent, 
    PopoverTrigger 
} from '@/components/ui/popover'

const props         = defineProps({
    data: Object,
    form: Object,
})

const form          = useForm({
    search:     props.form.search,
    sort:       props.form.sort,
    start:      props.form.start ? parseDate(props.form.start) : null,
    end:        props.form.end ? parseDate(props.form.end) : null,
});
const params        = useUrlSearchParams('history')
const date          = ref()
const search        = ref(form.search)
const loading       = ref(false)

const df            = new DateFormatter('ro', {
    dateStyle: 'long',
    format: 'F Y',
})

const format        = () => {
    let start   = form.start?.toDate(getLocalTimeZone())
    let end     = form.end?.toDate(getLocalTimeZone())
    return `${df.format(start)} - ${df.format(end)}`
}
const dateListener  = ({start, end}) => {
    form.start  = start;
    form.end    = end;
}
const transform     = (data) => {
    if (data.start || data.end) {
        data.start  = data.start.toString()
        data.end    = data.end.toString()
    }
    return data;
} 

const submit        = () => {
    loading.value = true
    router.reload({
        preserveScroll: true,
        data: transform(form.data()),
        onSuccess: () => {
            form.clearErrors()
        },
        onError: (error) => {
            form.setError(error)
        },
        onFinish: () => {
            loading.value = false
        }
    })
}

const reset         = () => {
    form.defaults({
        search: null,
        sort: null,
        start: null,
        end: null,
    })
    form.reset()
    search.value = null
    submit()
}

const filters       = computed(() => {
    return !!Object.values(form.data()).filter((e) => !!e).length
})

const handleSearch  = useDebounceFn((e) => {
    form.search = e
    submit()
}, 500)

onMounted(() => {
    if (params.scrollTo) lenis.scrollTo(`#${params.scrollTo}`);
})
</script>
<template>
    <Teleport to="body">
        <Preview />
    </Teleport>

    <Layout class="relative">

        <TransitionGroup name="fade">
            <template v-if="loading" >
                <div class="absolute z-20 flex size-full backdrop-blur-sm rounded-3xl ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-24 animate-spin m-auto stroke-theme-primary-dark">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
            </template>
        </TransitionGroup>

        <section class="px-responsive flex flex-col gap-responsive">
            <div class="container-text">
                <div class="container-text">
                    <div>
                        <span>Galerie</span>
                        <h1>Echipa APL</h1>
                    </div>
                    <p>
                        Asociaţii APL adoră să călătorească în lume! Şi, de multe ori, APL acoperă cheltuielile lor. De exemplu, în fiecare an în noiembrie, îi luăm pe cei care s-au calificat în croazieră. Am vizitat deja Caraibe, Europa şi Asia de Est. De asemenea, am plecat din Singapore, Cuba şi Miami... Şi nu ne vom opri să explorăm cele mai iconice locuri de pe planeta noastră. Călătoriile noastre sunt pline de entuziasm, emoţie şi surprize exclusive! Urcaţi la bord cu noi!
                    </p>
                </div>
                <form class="w-full flex-responsive-reverse-lg gap-responsive-xs items-end " @submit.prevent>
                    
                    <div class="w-full lg:w-min min-w-64">
                        <ErrorLabel :text="form.errors.search" />
                        <Input placeholder="Cauta dupa denumire" v-model="search" @update:modelValue="handleSearch"/>
                    </div>

                    <Select v-model="form.sort" @update:modelValue="submit">
                        <SelectTrigger class="lg:w-min min-w-64">
                            <SelectValue placeholder="Sorteaza" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="desc">
                                    Cele mai recente
                                </SelectItem>
                                <SelectItem value="asc">
                                    Cele mai vechi
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div class="w-full lg:w-auto">
                        <Popover>
                            <PopoverTrigger as-child>
                                <div class="flex flex-col">
                                    <ErrorLabel :text="form.errors.start" />
                                    <ErrorLabel :text="form.errors.end" />
                                    <Button
                                        variant="outline"
                                        :class="cn(
                                            'lg:w-64 justify-start text-left font-normal',
                                            !date && 'text-muted-foreground',
                                        )"
                                    >
                                        <CalendarIcon class="mr-2 h-4 w-4" />
                                        {{ form.start ? format() : "Filtreaza data" }}
                                    </Button>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent class="w-auto p-0" side="bottom">
                                <RangeCalendar initial-focus :v-model="[form.start, form.end]" locale="ro" @update:model-value="dateListener"  @update:modelValue="submit" :maxValue="now().subtract({days: 1})"/>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Transition name="fade">
                        <Button v-if="filters" @click="reset" class="w-full lg:w-auto">
                            Reseteaza filtrele
                        </Button>
                    </Transition>
                </form>
                <!-- <Separator /> -->
            </div>
            <div class="flex flex-col gap-responsive" v-if="Object.keys(data).length" >
                <TransitionGroup name="list" >
                    <Gallery v-for="(gallery) in data" :gallery="gallery" />
                </TransitionGroup>
            </div>
            <div class="w-full h-[50vh] flex text-center" v-else>
                <span class="font-display text-2xl m-auto opacity-75">
                    Opa... Ne pare rau dar din pacate nu am gasit nici un rezultat
                </span>
            </div>
        </section>
        
        <Announcement 
            title="title"
            description="title"
            :actions="{
                'Blog': route('views.blog'),
                'Galerie': route('views.gallery'),
            }"
        />

    </Layout>
</template>