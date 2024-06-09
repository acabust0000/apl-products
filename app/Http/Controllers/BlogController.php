<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(Request $request, Article $article) {
        $props = (new ArticleResource($article))->toArray($request);
        
        return inertia('blog/index', $props); 
    }
}
