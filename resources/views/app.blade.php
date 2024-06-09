<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf_token" content="{{ csrf_token() }}">
        <meta name="description" content="Bine ați venit în familia noastră! La noi veți găsi produse de sănătate ușor de utilizat, concepute pentru a vă sprijini în îmbunătățirea stilului de viață. Fiecare produs este selectat cu grijă pentru a oferi simplitate și eficiență, astfel încât să vă puteți concentra pe ceea ce contează cel mai mult: bunăstarea dumneavoastră. Suntem dedicați să creăm o comunitate unde fiecare membru se simte susținut și inspirat. Alăturați-vă nouă și descoperiți soluții inovatoare pentru o viață mai sănătoasă și mai fericită.">
        <meta name="keywords" content="sanatate, apl, fericire, sanatosi, dureri, remedii, echipa, putere">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-953VZGK5CJ"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-953VZGK5CJ');
        </script>

        @routes
        @vite(['resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="antialiased flex flex-col overflow-hidden h-screen">
        @inertia
    </body>
</html>
