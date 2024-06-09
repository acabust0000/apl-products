<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ArticleCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        $dataFn = fn () => $this->collection
            ->map(fn ($item) => 
                (new ArticlePreviewResource($item))->toArray($request)
            )
            ->all()
        ;

        return [
            'data' => $dataFn(),
            'form' => [
                'search'    => $request->query('search'),
                'sort'      => $request->query('sort'),
            ],
        ];
    }
}
