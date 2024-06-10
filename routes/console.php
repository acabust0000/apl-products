<?php

use Spatie\Sitemap\SitemapGenerator;

Schedule::call(function () {
    SitemapGenerator::create('https://apl-products.com')->getSitemap()->writeToDisk('public', 'sitemap.xml');
})->daily();
