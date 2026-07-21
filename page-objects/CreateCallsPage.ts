import { Locator, Page, expect } from "@playwright/test";

export class CreateCallsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly subjectInput: Locator;
    private readonly directionSelect: Locator;
    private readonly statusSelect: Locator;
    private readonly startDateInput: Locator;
    private readonly startTimeHoursSelect: Locator;
    private readonly startTimeMinutesSelect: Locator;
    private readonly startTimeMeridiemSelect: Locator;
    private readonly relatedToTypeSelect: Locator;
    private readonly relatedToNameInput: Locator;
    private readonly durationHoursInput: Locator;
    private readonly durationMinutesSelect: Locator;
    private readonly descriptionTextarea: Locator;
    private readonly assignedToInput: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Calls&action=EditView&return_module=Calls&return_action=DetailView";

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole("button", { name: "Save" });
        this.cancelButton = page.getByRole("button", { name: "Cancel" });
        this.subjectInput = page.locator("#name");
        this.directionSelect = page.locator("#direction");
        this.statusSelect = page.locator("#status");
        this.startDateInput = page.locator("#date_start_date");
        this.startTimeHoursSelect = page.locator("#date_start_hours");
        this.startTimeMinutesSelect = page.locator("#date_start_minutes");
        this.startTimeMeridiemSelect = page.locator("#date_start_meridiem");
        this.relatedToTypeSelect = page.locator("#parent_type");
        this.relatedToNameInput = page.locator("#parent_name");
        this.durationHoursInput = page.locator("#duration_hours");
        this.durationMinutesSelect = page.locator("#duration_minutes");
        this.descriptionTextarea = page.locator("#description");
        this.assignedToInput = page.locator("#assigned_user_name");
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole("heading", { name: "CREATE" })
        ).toBeVisible();
    }

    async fillSubject(subject: string) {
        await this.subjectInput.fill(subject);
    }

    async selectDirection(direction: "Inbound" | "Outbound") {
        await this.directionSelect.selectOption(direction);
    }

    async selectStatus(status: "Planned" | "Held" | "Not Held") {
        await this.statusSelect.selectOption(status);
    }

    async fillStartDate(date: string) {
        await this.startDateInput.fill(date);
    }

    async selectStartTime(hours: string, minutes: string, meridiem: "am" | "pm") {
        await this.startTimeHoursSelect.selectOption(hours);
        await this.startTimeMinutesSelect.selectOption(minutes);
        await this.startTimeMeridiemSelect.selectOption(meridiem);
    }

    async selectRelatedToType(type: string) {
        await this.relatedToTypeSelect.selectOption(type);
    }

    async fillRelatedToName(name: string) {
        await this.relatedToNameInput.fill(name);
    }

    async fillDuration(hours: string, minutes: string) {
        await this.durationHoursInput.fill(hours);
        await this.durationMinutesSelect.selectOption(minutes);
    }

    async fillDescription(description: string) {
        await this.descriptionTextarea.fill(description);
    }

    async fillAssignedTo(user: string) {
        await this.assignedToInput.fill(user);
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}
