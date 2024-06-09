<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Article;
use Illuminate\Support\Str;

/**
 * @mixin Article
 */
class ArticlePreviewResource extends JsonResource
{
    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'title'         => $this->title,
            'description'   => Str::of(strip_tags($this->description))->limit(350),
            'img'           => $this->whenLoaded('media', $this->getFirstMediaUrl('default', 'preview')),
            'url'           => route('blog.index', ['article' => $this->slug]),
        ];
    }
}
