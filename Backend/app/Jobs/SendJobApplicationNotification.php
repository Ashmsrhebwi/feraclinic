<?php

namespace App\Jobs;

use App\Models\JobApplication;
use App\Mail\NewJobApplicationNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendJobApplicationNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $jobApplication;

    /**
     * Create a new job instance.
     */
    public function __construct(JobApplication $jobApplication)
    {
        $this->jobApplication = $jobApplication;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $notificationEmail = env('CAREER_NOTIFICATION_EMAIL', 'consultation@feraclinic.com');
            if ($notificationEmail) {
                Mail::to($notificationEmail)->send(new NewJobApplicationNotification($this->jobApplication));
                Log::info('Background: Job application notification email sent for ID: ' . $this->jobApplication->id);
            }
        } catch (\Exception $e) {
            Log::error('Background: Failed to send job application notification email: ' . $e->getMessage());
        }
    }
}
