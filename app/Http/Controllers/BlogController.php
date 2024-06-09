<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(Request $request, Article $article) {
        $title = config('app.name');
        Inertia::share('title', "$article->title - $title");

        $props = (new ArticleResource($article))->toArray($request);
        
        return inertia('blog/index', $props); 
    }
}
