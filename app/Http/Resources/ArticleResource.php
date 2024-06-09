<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Article;

/**
 * @mixin Article
 */
class ArticleResource extends JsonResource
{
    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'title'         => $this->title,
            'url'           => route('blog.index', ['article' => $this->slug]),
            'content'       => $this->description,
            'published_at'  => "Publicat la {$this->created_at->format('d/m/Y')}",
            'img'           => $this->whenLoaded('media', $this->getFirstMediaUrl('default', 'preview')),

        ];
    }
}
