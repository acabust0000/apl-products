<script setup>
import Layout from '@/layouts/default.vue'
import { useForm } from '@inertiajs/vue3';
import { DoubleArrowDownIcon, DoubleArrowUpIcon } from '@radix-icons/vue'

import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { toast } from 'vue-sonner'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ref } from 'vue';
import { ErrorLabel } from '@/components/ui/error-label';
import { Separator } from '@/components/ui/separator'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Announcement } from '@/components/ui/announcement';

const props     = defineProps({
    url: String,
    faqs: Object,
})

const form      = useForm({
    name:           null,
    email:          null,
    phone:          null,
    description:    null,
})

const formRef   = ref(null);
const textarea  = ref(null);

const submit    = () => form.post(props.url, {
    onSuccess: () => {
        toast.success('Va multumim de contact!', {
            description: 'Incercam sa luam cat mai rapid legatura cu dumneavoastra.',
        })
        form.reset()
        form.clearErrors()
        textarea.value.input = ""
    },
    onError: () => toast.error('Din pacate, contactul dumneavoastra nu a putut fi trimis.', {
            description: 'Va rugam sa incercati din nou',
        })
    }
)
</script>
<template>
    <Layout>
        <section id="contactCard" class="px-responsive sm:py-responsive gap-responsive items-start flex-responsive border-none shadow-none bg-transparent">

            <div class="w-full flex flex-col gap-responsive-xs">
                <div>
                    <span class="font-script w-min">
                        Contact
                    </span>
                    <h1>
                        Nu ezita sa ne contactezi!
                    </h1>
                </div>
                <p>
                    Dacă aveți întrebări, sugestii sau nevoie de asistență, nu ezitați să ne contactați. Echipa noastră de suport este disponibilă pentru a vă ajuta cu orice informație legată de produsele noastre. Ne puteți contacta prin telefon, email sau completând formularul de contact de pe site. De asemenea, ne puteți găsi pe rețelele sociale pentru ultimele noutăți și actualizări. Suntem aici pentru a vă oferi suportul necesar și pentru a vă asigura că experiența dumneavoastră cu produsele noastre este cât mai plăcută și eficientă.
                </p>
            </div>

            <form class="w-full space-y-6" @submit.prevent="submit">
                <FormField name="name" :validate-on-blur="!isFieldDirty" ref="formRef">
                    <FormItem v-auto-animate>
                        <FormLabel>Nume</FormLabel>
                        <FormDescription>Prenumele si numele de familie.</FormDescription>
                        <FormControl>
                            <Input type="text" placeholder="Maria Elena" v-model="form.name" />
                        </FormControl>
                        <ErrorLabel :text="form.errors.name" />
                    </FormItem>
                </FormField>
                <FormField name="email" :validate-on-blur="!isFieldDirty">
                    <FormItem v-auto-animate>
                        <FormLabel>Email</FormLabel>
                        <FormDescription>Adresa casutei electronice.</FormDescription>
                        <FormControl>
                            <Input type="email" placeholder="maria.elena@yahoo.com" v-model="form.email" />
                        </FormControl>
                        <ErrorLabel :text="form.errors.email" />
                    </FormItem>
                </FormField>
                <FormField name="phone" :validate-on-blur="!isFieldDirty">
                    <FormItem v-auto-animate>
                        <FormLabel>Telefon</FormLabel>
                        <FormDescription>Numarul de phone la care puteti fi contactat.</FormDescription>
                        <FormControl>
                            <Input type="phone" placeholder="+7078123456" v-model="form.phone" />
                        </FormControl>
                        <ErrorLabel :text="form.errors.phone" />
                    </FormItem>
                </FormField>
                <FormField name="description" :validate-on-blur="!isFieldDirty">
                    <FormItem v-auto-animate>
                        <FormLabel>Detalii</FormLabel>
                        <FormDescription>Comunicati-ne mai multe detalii de ce ne contactati
                        </FormDescription>
                        <FormControl>
                            <Textarea ref="textarea" type="text" placeholder="Doresc sa aflu mai multe informatii despre..." v-model="form.description" />
                        </FormControl>
                        <ErrorLabel :text="form.errors.description" />
                    </FormItem>
                </FormField>
                <div class="flex justify-end w-full">
                    <Button type="submit">
                        Trimite
                    </Button>
                </div>
            </form>
        </section>

        <section class="flex flex-col p-responsive gap-responsive lg:pt-0 container">
            <div class="container-text">
                <div>
                    <span>
                        Intrebari Frecvente
                    </span>
                    <h2>
                        Afla mai multe
                    </h2>
                </div>
                <p>
                    Produsele noastre sunt concepute pentru a vă simplifica rutina zilnică de îngrijire a sănătății. Fie că este vorba de suplimente alimentare, echipamente de fitness sau dispozitive de monitorizare a sănătății, ne asigurăm că fiecare produs este intuitiv și ușor de utilizat. În plus, oferim ghiduri detaliate și asistență tehnică pentru a vă ajuta să beneficiați la maxim de produsele noastre. Dacă aveți întrebări sau întâmpinați dificultăți, echipa noastră de suport este aici pentru a vă oferi răspunsuri rapide și soluții eficiente.
                </p>
            </div>

            <div class="flex flex-col gap-3" v-for="faq in faqs">
                <Collapsible v-slot="{ open }">
                    <CollapsibleTrigger class="flex justify-between w-full items-center">
                        <CardTitle v-text="faq.title" as="h4" />
                        <div class="relative shrink-0 w-12 flex items-center justify-center">
                            <Transition name="fade" >
                                <DoubleArrowUpIcon class="absolute size-5" v-if="open" />
                                <DoubleArrowDownIcon class="absolute size-5" v-else />
                            </Transition>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent as="p" v-html="faq.description" class="mt-4"/>
                </Collapsible>
                <!-- <Separator /> -->
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
<style scoped>
#contactCard p, 
#contactCard label 
{
    @apply text-theme-primary-light-foreground
}

form span {
    @apply text-red-200
}
form ::placeholder {
    @apply opacity-75
}
</style>
