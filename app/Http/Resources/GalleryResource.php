<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Models\Gallery;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Gallery
 */
class GalleryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title'     => $this->title,
            'date'      => ucfirst($this->date->translatedFormat('F Y')),
            'data'      => $this->whenLoaded('media', $this->getMedia()->pluck('preview_url', 'name')),
            'id'        => "gallery_{$this->id}"
        ];
    }
}
