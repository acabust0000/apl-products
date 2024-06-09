<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLeadRequest;
use App\Models\Lead;

class LeadsController extends Controller
{
    public function store (StoreLeadRequest $request) {
        \Log::info(json_encode($request->validated()));
        
        Lead::create($request->validated());

        return redirect()->back();
    }
}
