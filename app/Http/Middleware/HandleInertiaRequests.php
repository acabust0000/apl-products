<?php

namespace App\Http\Middleware;

use App\Http\Resources\ArticlePreviewResource;
use App\Http\Resources\GalleryPreviewResource;
use App\Models\Article;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        $blog       = ArticlePreviewResource::collection(Article::latest()->take(5)->get())->collection;
        $gallery    = GalleryPreviewResource::collection(Gallery::latest()->take(5)->get())->collection;

        return array_merge(parent::share($request), [
            'links' => [
                'active'    => $request->url(),
                'blog'      => $blog,
                'gallery'   => $gallery,
                'apl'       => 'https://ro.aplgo.com/884621/acumullitsa/'
            ],
        ]);
    }
}
