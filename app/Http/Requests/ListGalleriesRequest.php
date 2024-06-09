<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ListGalleriesRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'search'    => ['nullable', 'string'],
            'sort'      => ['nullable', 'string', 'in:asc,desc'],
            'start'     => ['nullable', 'required_with:end', 'date', 'before:today', 'before:end'],
            'end'       => ['nullable', 'required_with:start', 'date', 'before:today'],
        ];
    }

    public function attributes()
    {
        return [
            'start'       => 'datei de inceput',
            'end'         => 'datei de sfarsit',
            'search'      => 'de cautare',
        ];
    }
}
