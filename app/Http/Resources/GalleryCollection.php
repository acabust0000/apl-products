<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class GalleryCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        $dataFn = fn () => $this->collection
            ->map(fn ($item) => 
                (new GalleryResource($item))->toArray($request)
            )
            ->all()
        ;

        return [
            'data' => $dataFn(),
            'form' => [
                'search'    => $request->query('search'),
                'sort'      => $request->query('sort'),
                'start'     => $request->query('start'),
                'end'       => $request->query('end'),
            ],
        ];
    }
}
