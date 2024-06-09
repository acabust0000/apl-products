<script setup>
import {  useDebounceFn } from '@vueuse/core'
import { router, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue'

import Layout from '@/layouts/default.vue'

import Article  from './components/Article.vue'

import { Announcement }     from '@/components/ui/announcement'
import { ErrorLabel }       from '@/components/ui/error-label'
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

const props         = defineProps({
    data: Object,
    form: Object,
})

const form          = useForm({
    search:     props.form.search,
    sort:       props.form.sort,
});
const search        = ref(form.search)
const loading       = ref(false)

const submit        = () => {
    loading.value = true
    router.reload({
        preserveScroll: true,
        data: form.data(),
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

        <section>
            
            <div class="container px-responsive flex flex-col">
                <div  class="flex flex-col gap-responsive-xs ">
                    <div class="container-text">
                        <div>
                            <span>Blog</span>
                            <h1>Articolele noastre</h1>
                        </div>
                        <p>
                            Misiunea APL este de a schimba vieţile oamenilor spre bine! Suntem o echipă care ajută pe cei cu care lucrăm să devină o versiune mai bună decât sunt. Iar cei cu care colaborăm devin oameni care merită o rundă de APLauze.
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
                        <Article v-for="article in data" :article="article" />
                    </TransitionGroup>
                </div>

                <div class="w-full h-[50vh] flex text-center" v-else>
                    <span class="font-display text-2xl m-auto opacity-75">
                        Opa... Ne pare rau dar din pacate nu am gasit nici un rezultat
                    </span>
                </div>
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