<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class BlogResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';
    protected static ?string $navigationLabel = 'Blog';
    protected static ?string $modelLabel = 'articol';

    public static function form(Form $form): Form
    {
        return $form
        ->columns(1)
        ->schema([
            
            Forms\Components\TextInput::make('title')
                ->label('Titlu')
                ->placeholder('Excursie cu echipa in Muntii Apuseni...')
                ->required()
            ,

            Forms\Components\RichEditor::make('description')
                ->label('Continut')
                ->required()
            ,

            Forms\Components\SpatieMediaLibraryFileUpload::make('default')
                ->label('Media')
                ->required()
                ->conversion('preview')
            ,

        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\SpatieMediaLibraryImageColumn::make('default')
                    ->label('Media')
                    ->conversion('preview')
                ,

                Tables\Columns\TextColumn::make('title')
                    ->label('Titlu')
                    ->sortable()
                ,

                Tables\Columns\TextColumn::make('description')
                    ->label('Continut')
                    ->state(fn ($record) => Str::of(strip_tags($record->description))->limit(50))
                ,

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Data publicarii')
                    ->sortable()
                    ->description(fn ($record) => ucfirst($record->created_at->translatedFormat('d/F/Y')))
                    ->state(fn ($record) => $record->created_at->diffForHumans())
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

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
