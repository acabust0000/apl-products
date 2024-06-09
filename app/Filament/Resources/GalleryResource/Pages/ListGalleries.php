<?php

namespace App\Filament\Resources\GalleryResource\Pages;

use App\Filament\Resources\GalleryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\Layout;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ListGalleries extends ListRecords
{
    protected static string $resource = GalleryResource::class;
    protected static ?string $title = 'Galerii';

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                
                TextColumn::make('title')
                    ->label('Titlu')
                ,
                
                SpatieMediaLibraryImageColumn::make('default')
                    ->label('media')
                    ->conversion('preview')
                    ->circular()
                    ->limit(5)
                    ->stacked()
                ,

                TextColumn::make('count')
                    ->label('Nr. imagini')
                    ->state(fn ($record) => trans_choice('custom.images', $record->media()->count(), ['attribute' => $record->media()->count()]))
                ,


                TextColumn::make('date')
                    ->label('Luna')
                    ->state(fn ($record) => ucfirst($record->date->translatedFormat('F Y')))
                ,

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }


    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
