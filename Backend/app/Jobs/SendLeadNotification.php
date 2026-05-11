<?php

namespace App\Jobs;

use App\Models\Lead;
use App\Mail\NewLeadNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendLeadNotification implements ShouldQueue
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
            $notificationEmail = env('LEAD_NOTIFICATION_EMAIL');
            if ($notificationEmail) {
                Mail::to($notificationEmail)->send(new NewLeadNotification($this->lead));
                Log::info('Background: Lead notification email sent for Lead ID: ' . $this->lead->id);
            }
        } catch (\Exception $e) {
            Log::error('Background: Failed to send lead notification email: ' . $e->getMessage());
        }
    }
}
