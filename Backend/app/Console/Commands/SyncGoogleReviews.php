<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\GoogleBusinessReviewService;

class SyncGoogleReviews extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'google-reviews:sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch and sync Google Business Profile reviews';

    /**
     * Execute the console command.
     */
    public function handle(GoogleBusinessReviewService $service)
    {
        $this->info('Starting Google Reviews sync...');

        $result = $service->syncReviews();

        if (isset($result['error'])) {
            $this->error('Sync failed: ' . $result['error']);
            return 1;
        }

        $this->info('Sync completed successfully.');
        $this->table(['Metric', 'Count'], [
            ['Reviews Fetched', $result['fetched']],
            ['Reviews Created', $result['created']],
            ['Reviews Updated', $result['updated']],
            ['Reviews Hidden (< 5 stars)', $result['hidden']],
        ]);

        return 0;
    }
}
