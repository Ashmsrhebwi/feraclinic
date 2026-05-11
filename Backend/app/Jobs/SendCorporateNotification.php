<?php

namespace App\Jobs;

use App\Models\Corporate;
use App\Mail\NewCorporateNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendCorporateNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $corporate;

    /**
     * Create a new job instance.
     */
    public function __construct(Corporate $corporate)
    {
        $this->corporate = $corporate;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $notificationEmail = env('CORPORATE_NOTIFICATION_EMAIL', 'consultation@feraclinic.com');
            if ($notificationEmail) {
                Mail::to($notificationEmail)->send(new NewCorporateNotification($this->corporate));
                Log::info('Background: Corporate notification email sent for ID: ' . $this->corporate->id);
            }
        } catch (\Exception $e) {
            Log::error('Background: Failed to send corporate notification email: ' . $e->getMessage());
        }
    }
}
