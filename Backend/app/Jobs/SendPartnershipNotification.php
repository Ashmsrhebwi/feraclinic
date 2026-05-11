<?php

namespace App\Jobs;

use App\Models\Partnership;
use App\Mail\NewPartnershipNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendPartnershipNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $partnership;

    /**
     * Create a new job instance.
     */
    public function __construct(Partnership $partnership)
    {
        $this->partnership = $partnership;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $notificationEmail = env('PARTNERSHIP_NOTIFICATION_EMAIL', 'consultation@feraclinic.com');
            if ($notificationEmail) {
                Mail::to($notificationEmail)->send(new NewPartnershipNotification($this->partnership));
                Log::info('Background: Partnership notification email sent for ID: ' . $this->partnership->id);
            }
        } catch (\Exception $e) {
            Log::error('Background: Failed to send partnership notification email: ' . $e->getMessage());
        }
    }
}
