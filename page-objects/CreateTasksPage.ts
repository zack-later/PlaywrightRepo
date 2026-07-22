import { Locator, Page, expect } from "@playwright/test";

export class CreateTasksPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly nameInput: Locator;
    private readonly statusSelect: Locator;
    private readonly startDateInput: Locator;
    private readonly startTimeHoursSelect: Locator;
    private readonly startTimeMinutesSelect: Locator;
    private readonly startTimeMeridiemSelect: Locator;
    private readonly startNoTimeCheckbox: Locator;
    private readonly relatedToTypeSelect: Locator;
    private readonly relatedToNameInput: Locator;
    private readonly dueDateInput: Locator;
    private readonly dueTimeHoursSelect: Locator;
    private readonly dueTimeMinutesSelect: Locator;
    private readonly dueTimeMeridiemSelect: Locator;
    private readonly dueNoTimeCheckbox: Locator;
    private readonly contactInput: Locator;
    private readonly prioritySelect: Locator;
    private readonly descriptionTextarea: Locator;
    private readonly assignedToInput: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Tasks&action=EditView&return_module=Tasks&return_action=DetailView";

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole("button", { name: "Save" }).first();
        this.cancelButton = page.getByRole("button", { name: "Cancel" }).first();
        this.nameInput = page.locator("#name");
        this.statusSelect = page.locator("#status");
        this.startDateInput = page.locator("#date_start_date");
        this.startTimeHoursSelect = page.locator("#date_start_hours");
        this.startTimeMinutesSelect = page.locator("#date_start_minutes");
        this.startTimeMeridiemSelect = page.locator("#date_start_meridiem");
        this.startNoTimeCheckbox = page.locator("#date_start_flag");
        this.relatedToTypeSelect = page.locator("#parent_type");
        this.relatedToNameInput = page.locator("#parent_name");
        this.dueDateInput = page.locator("#date_due_date");
        this.dueTimeHoursSelect = page.locator("#date_due_hours");
        this.dueTimeMinutesSelect = page.locator("#date_due_minutes");
        this.dueTimeMeridiemSelect = page.locator("#date_due_meridiem");
        this.dueNoTimeCheckbox = page.locator("#date_due_flag");
        this.contactInput = page.locator("#contact_name");
        this.prioritySelect = page.locator("#priority");
        this.descriptionTextarea = page.locator("#description");
        this.assignedToInput = page.locator("#assigned_user_name");
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole("heading", { name: "CREATE" })
        ).toBeVisible();
    }

    async fillSubject(subject: string) {
        await this.nameInput.fill(subject);
    }

    async selectStatus(status: "Not Started" | "In Progress" | "Completed" | "Pending Input" | "Deferred") {
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

    async checkStartNoTime() {
        await this.startNoTimeCheckbox.check();
    }

    async selectRelatedToType(type: string) {
        await this.relatedToTypeSelect.selectOption({ label: type });
    }

    async fillRelatedToName(name: string) {
        await this.relatedToNameInput.fill(name);
    }

    async fillDueDate(date: string) {
        await this.dueDateInput.fill(date);
    }

    async selectDueTime(hours: string, minutes: string, meridiem: "am" | "pm") {
        await this.dueTimeHoursSelect.selectOption(hours);
        await this.dueTimeMinutesSelect.selectOption(minutes);
        await this.dueTimeMeridiemSelect.selectOption(meridiem);
    }

    async checkDueNoTime() {
        await this.dueNoTimeCheckbox.check();
    }

    async fillContact(contact: string) {
        await this.contactInput.fill(contact);
    }

    async selectPriority(priority: "High" | "Medium" | "Low") {
        await this.prioritySelect.selectOption(priority);
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