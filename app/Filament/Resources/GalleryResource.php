<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GalleryResource\Pages;
use App\Models\Gallery;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;

class GalleryResource extends Resource
{
    protected static ?string $model = Gallery::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationLabel = 'Galerie';
    protected static ?string $modelLabel = 'galerie';


    public static function form(Form $form): Form
    {
        return $form
            ->columns([
                'default'   => 3,
                'sm'        => 1,
            ])
            ->schema([
                
                TextInput::make('title')
                    ->label('Titlu')
                    ->placeholder('Excursie cu echipa in Muntii Apuseni...')
                    ->required()
                    ->columnSpan([
                        'default'   => 3,
                        'sm'        => 2,
                    ])
                ,

                DatePicker::make('date')
                    ->label('Luna')
                    ->required()
                    ->displayFormat('F Y')
                    ->native(false)
                    ->columnSpan([
                        'default'   => 3,
                        'sm'        => 1,
                    ])
                ,

                SpatieMediaLibraryFileUpload::make('default')
                    ->label('Media')
                    ->conversion('preview')
                    ->multiple()
                    ->reorderable()
                    ->required()
                    // ->responsiveImages()
                    ->columnSpan(3)
                ,

            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGalleries::route('/'),
            'create' => Pages\CreateGallery::route('/create'),
            'edit' => Pages\EditGallery::route('/{record}/edit'),
        ];
    }
}
