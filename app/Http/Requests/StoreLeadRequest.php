<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'          => ['required', 'string', 'min:3'],
            'email'         => ['required', 'email'],
            'phone'         => ['nullable', 'phone:INTERNATIONAL'],
            'description'   => ['required', 'string', 'min:30'],
        ];
    }

    public function attributes()
    {
        return [
            'name'          => 'nume',
            'phone'         => 'telefon',
            'description'   => 'descriere',
        ];
    }
}
