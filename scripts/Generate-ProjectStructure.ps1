<#
.SYNOPSIS
    Generates a standardized architectural project folder structure based on LMST standards.
    Creates '01_Competition' and '02_Execution' directories with their respective subfolders.

.DESCRIPTION
    Usage: .\Generate-ProjectStructure.ps1 -ProjectName "2026_NewProject_Target"
#>

param (
    [string]$ProjectName = "2026_NewProject_Template"
)

$root = Join-Path -Path $PWD -ChildPath $ProjectName

# 1. Design_Competition Structure
$compRoot = Join-Path -Path $root -ChildPath "01_Competition"
$compFolders = @(
    "00_Admin",
    "01_Research",
    "02_Concept",
    "03_BIM_Model",
    "04_Visualization",
    "05_Drawings",
    "06_Presentation",
    "07_Submission",
    "99_Archive"
)

# 2. Execution_Design Structure
$execRoot = Join-Path -Path $root -ChildPath "02_Execution"
$execFolders = @(
    "00_Admin\In",
    "00_Admin\Out",
    "01_Permit",
    "02_BIM_Revit\01_Central",
    "02_BIM_Revit\02_Links",
    "03_Work_CAD",
    "04_Engineering\Struct",
    "04_Engineering\MEP",
    "04_Engineering\Civil",
    "04_Engineering\Landscape",
    "05_Publish\SD",
    "05_Publish\DD",
    "05_Publish\CD",
    "06_Docs"
)

# Create Directories
Write-Host "Creating Project Structure for: $ProjectName" -ForegroundColor Cyan

# Create Competition Folders
foreach ($folder in $compFolders) {
    $path = Join-Path -Path $compRoot -ChildPath $folder
    New-Item -ItemType Directory -Path $path -Force | Out-Null
    Write-Host "  + Created: 01_Competition\$folder" -ForegroundColor Gray
}

# Create Execution Folders
foreach ($folder in $execFolders) {
    $path = Join-Path -Path $execRoot -ChildPath $folder
    New-Item -ItemType Directory -Path $path -Force | Out-Null
    Write-Host "  + Created: 02_Execution\$folder" -ForegroundColor Gray
}

Write-Host "Done! Project structure created at: $root" -ForegroundColor Green
