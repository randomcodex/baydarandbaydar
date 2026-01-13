$diff = git diff --cached --name-only
$status = git status --short

if ([string]::IsNullOrEmpty($diff) -and [string]::IsNullOrEmpty($status)) {
    Write-Host "No changes to commit" -ForegroundColor Yellow
    exit 1
}

$type = "chore"
$scope = ""

if ($diff -match "\.scss|\.css" -or $status -match "\.scss|\.css") { $type = "style" }
if ($diff -match "src/" -or $status -match "src/") { $type = "feat" }
if ($status -match "bug|fix") { $type = "fix" }
if ($diff -match "perf|performance" -or $status -match "perf") { $type = "perf" }
if ($diff -match "test" -or $status -match "test") { $type = "test" }

$files = ($diff | Select-Object -First 3 | ForEach-Object { Split-Path -Leaf $_ }) -join ", "

$message = "$($type): update $($files)"

git add .

Write-Host "Committing: $message" -ForegroundColor Green
git commit -m "$message"

Write-Host "Pushing..." -ForegroundColor Green
git push

Write-Host "Done!" -ForegroundColor Green
