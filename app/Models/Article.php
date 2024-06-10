<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Image\Enums\Fit;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * @param string $title
 */
class Article extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasSlug;

    protected $fillable = [
        'title',
        'description',
        'slug',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('default')
            ->singleFile()
        ;
    }

    public function registerMediaConversions(Media|null $media = null): void
    {
        $this->addMediaConversion('preview')
            ->optimize()
            ->fit(Fit::Max, 1920,  1080)
            ->format('webp')
            ->nonQueued()
        ;
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom(['title'])
            ->saveSlugsTo('slug')
        ;
    }
    
}
