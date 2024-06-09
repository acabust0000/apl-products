<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LeadResource\Pages;
use App\Filament\Resources\LeadResource\RelationManagers;
use App\Models\Lead;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LeadResource extends Resource
{
    protected static ?string $model = Lead::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $navigationLabel = 'Leaduri';
    protected static ?string $modelLabel = 'lead';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                                
                TextColumn::make('name')
                    ->label('Nume')
                    ->sortable()
                ,

                TextColumn::make('email')
                ,

                TextColumn::make('phone')
                    ->label('Telefon')
                ,

                TextColumn::make('description')
                    ->label('Descriere')
                ,

            ])
            ->filters([
                //
            ])
            ->actions([
                // Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLeads::route('/'),
            // 'create' => Pages\CreateLead::route('/create'),
            // 'edit' => Pages\EditLead::route('/{record}/edit'),
        ];
    }
}
