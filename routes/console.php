<?php

use Spatie\Sitemap\SitemapGenerator;

Schedule::call(function () {
    SitemapGenerator::create(config('app.url'))->getSitemap()->writeToDisk('public', 'sitemap.xml');
})->daily();
