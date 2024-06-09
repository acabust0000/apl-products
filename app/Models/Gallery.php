<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

use Illuminate\Support\Carbon;

/**
 * @property Carbon $date
 * 
 */
class Gallery extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'date',
        'title',
    ];

    protected $casts = [
        'date' => 'datetime',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('default');
    }

    public function registerMediaConversions(Media|null $media = null): void
    {
        $this->addMediaConversion('preview')
            ->optimize()
            ->fit(Fit::Max, 1920,  1080)
            ->format('webp')
        ;
    }
    
}
