<?php

namespace App\Jobs;

use App\Models\Lead;
use App\Services\ZohoService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SyncLeadToZoho implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $lead;

    /**
     * Create a new job instance.
     */
    public function __construct(Lead $lead)
    {
        $this->lead = $lead;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            if (env('ENABLE_ZOHO_SYNC', true)) {
                $zohoService = new ZohoService();
                $zohoService->createLead($this->lead);
                Log::info('Background: Zoho CRM lead created successfully. Lead ID: ' . $this->lead->id);
            }
        } catch (\Exception $e) {
            Log::error('Background: Failed to create Zoho CRM lead: ' . $e->getMessage());
            // Optionally: throw $e to trigger a retry if the queue is configured for it
        }
    }
}
