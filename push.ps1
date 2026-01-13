# Auto commit and push with conventional commit message
$diff = git diff --cached --name-only
$status = git status --short

if ([string]::IsNullOrEmpty($diff) -and [string]::IsNullOrEmpty($status)) {
    Write-Host "No changes to commit" -ForegroundColor Yellow
    exit 1
}

# Determine commit type based on file patterns
$type = "chore"
$scope = ""

if ($diff -match "\.scss|\.css" -or $status -match "\.scss|\.css") { $type = "style" }
if ($diff -match "src/" -or $status -match "src/") { $type = "feat" }
if ($status -match "bug|fix") { $type = "fix" }
if ($diff -match "perf|performance" -or $status -match "perf") { $type = "perf" }
if ($diff -match "test" -or $status -match "test") { $type = "test" }

# Get changed files for message
$files = $diff | Select-Object -First 3 | ForEach-Object { Split-Path -Leaf $_ } | Join-String -Separator ", "

# Generate message
$message = "$($type): update $($files)"

# Stage all changes
git add .

# Commit with generated message
Write-Host "Committing: $message" -ForegroundColor Green
git commit -m "$message"

# Push
Write-Host "Pushing..." -ForegroundColor Green
git push

Write-Host "Done!" -ForegroundColor Green
