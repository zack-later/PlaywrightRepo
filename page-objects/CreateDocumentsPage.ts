import { Locator, Page, expect } from "@playwright/test";

export class CreateDocumentsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly fileInput: Locator;
    private readonly statusSelect: Locator;
    private readonly documentNameInput: Locator;
    private readonly revisionInput: Locator;
    private readonly documentTypeSelect: Locator;
    private readonly templateCheckbox: Locator;
    private readonly publishDateInput: Locator;
    private readonly expirationDateInput: Locator;
    private readonly categorySelect: Locator;
    private readonly subCategorySelect: Locator;
    private readonly descriptionTextarea: Locator;
    private readonly relatedDocumentInput: Locator;
    private readonly relatedDocumentSelectButton: Locator;
    private readonly assignedToInput: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Documents&action=EditView&return_module=Documents&return_action=DetailView";

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole("button", { name: "Save" }).first();
        this.cancelButton = page.getByRole("button", { name: "Cancel" }).first();
        this.fileInput = page.locator("#filename_file");
        this.statusSelect = page.locator("#status_id");
        this.documentNameInput = page.locator("#document_name");
        this.revisionInput = page.locator('input[name="revision"]');
        this.documentTypeSelect = page.locator("#template_type");
        this.templateCheckbox = page.locator("#is_template");
        this.publishDateInput = page.locator("#active_date");
        this.expirationDateInput = page.locator("#exp_date");
        this.categorySelect = page.locator("#category_id");
        this.subCategorySelect = page.locator("#subcategory_id");
        this.descriptionTextarea = page.locator("#description");
        this.relatedDocumentInput = page.locator('input[name="related_document_name"]');
        this.relatedDocumentSelectButton = page.locator('input[name="btn2"]');
        this.assignedToInput = page.locator("#assigned_user_name");
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole("heading", { name: "CREATE" })
        ).toBeVisible();
    }

    async uploadFile(filePath: string) {
        await this.fileInput.setInputFiles(filePath);
    }

    async selectStatus(status: "Active" | "Draft" | "FAQ" | "Expired" | "Under Review" | "Pending") {
        await this.statusSelect.selectOption(status);
    }

    async fillDocumentName(name: string) {
        await this.documentNameInput.fill(name);
    }

    async fillRevision(revision: string) {
        await this.revisionInput.fill(revision);
    }

    async selectDocumentType(type: "Mail Merge" | "EULA" | "NDA" | "License Agreement") {
        const values: Record<string, string> = {
            "Mail Merge": "mailmerge",
            "EULA": "eula",
            "NDA": "nda",
            "License Agreement": "license",
        };
        await this.documentTypeSelect.selectOption(values[type]);
    }

    async checkTemplate() {
        await this.templateCheckbox.check();
    }

    async fillPublishDate(date: string) {
        await this.publishDateInput.fill(date);
    }

    async fillExpirationDate(date: string) {
        await this.expirationDateInput.fill(date);
    }

    async selectCategory(category: string) {
        await this.categorySelect.selectOption({ label: category });
    }

    async selectSubCategory(subCategory: string) {
        await this.subCategorySelect.selectOption(subCategory);
    }

    async fillDescription(description: string) {
        await this.descriptionTextarea.fill(description);
    }

    /** related_document_name is a readonly field populated via this relationship-picker popup. */
    async clickSelectRelatedDocument() {
        await this.relatedDocumentSelectButton.click();
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
