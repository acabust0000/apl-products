<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GalleryPreviewResource extends JsonResource
{
    public static $wrap = null;
    
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'url'   => route('views.gallery', ['scrollTo' => "gallery_{$this->id}"]),
        ];
    }
}
