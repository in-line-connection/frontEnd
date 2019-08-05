import Html from "../Html/Html";
import Api from "../Api/Api";

export default () => new Components();
class Components {
  getAppContext() {
    return Html().select("#app");
  }

  getWrapperDiv() {
    return Html()
      .create("div")
      .addClass("wrapper");
  }
  renderHeader() {
    const mainHeader = Html()
      .create("header")
      .addClass("header");
    const mainHeaderTitle = Html()
      .create("h1")
      .addClass("header__title")
      .text("In-Line Connect");
    mainHeader.addChild(mainHeaderTitle);
    return mainHeader;
  }
  renderLoginFields() {
    const loginContentBlock = Html()
      .create("div")
      .addClass("Login");
    const loginPageTitle = Html()
      .create("h2")
      .addClass("Login__title");
    const loginFieldSet = Html()
      .create("fieldset")
      .addClass("login__form");
    const MedicNumLabel = Html()
      .create("label")
      .addClass("login__form-label")
      .text("Medic #:");
    const medicNumInputForm = Html()
      .create("input")
      .addAttribute("type", "text");
    const companyNameLabel = Html()
      .create("label")
      .addClass("login__form-label")
      .text("Company Name:");
    const companyInputForm = Html()
      .create("input")
      .addAttribute("type", "text");
    const submitButton = Html()
      .create("button")
      .addClass("login__form-button")
      .text("Login");
    loginContentBlock.addChild(loginPageTitle);
    loginContentBlock.addChild(loginFieldSet);
    loginFieldSet.addChild(MedicNumLabel);
    loginFieldSet.addChild(medicNumInputForm);
    loginFieldSet.addChild(companyNameLabel);
    loginFieldSet.addChild(companyInputForm);
    loginContentBlock.addChild(submitButton);
    return loginContentBlock;
  }
  renderMainFooter() {
    const footer = Html()
      .create("footer")
      .addClass("footer");
    const footerContent = Html()
      .create("small")
      .addClass("footer__copy")
      .text("&copy 2019 In-Line Connect");
    footer.addChild(footerContent);
    return footer;
  }
  renderPageHome() {
    const app = this.getAppContext();
    const wrapperDiv = this.getWrapperDiv();
    const mainHeader = this.renderHeader();
    const traumaFormContent = this.renderTraumaFormContent();
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(traumaFormContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderTraumaFormContent() {
    const traumaFormContentBlock = Html()
      .create("div")
      .addClass("traumaForm");
    const traumaFormTitle = Html()
      .create("h2")
      .addClass("header__trauma")
      .text("TRAUMA");
    const traumaFormContainer = Html()
      .create("div")
      .addClass("container");
    const traumaButtonContainer = Html()
      .create("div")
      .addClass("buttons__container");
    const mvcButton = Html()
      .create("button")
      .addAttribute("id", "MVC")
      .addClass("report__buttons")
      .text("MVC");
    const gsnButton = Html()
      .create("button")
      .addAttribute("id", "gsn")
      .addClass("report__buttons")
      .text("GSN");
    const fallButton = Html()
      .create("button")
      .addAttribute("id", "fall")
      .addClass("report__buttons")
      .text("Fall");
    const bluntForceButton = Html()
      .create("button")
      .addAttribute("id", "bluntForce")
      .addClass("report__buttons")
      .text("Blunt-Force Trauma");
    const penetratingTraumaButton = Html()
      .create("button")
      .addAttribute("id", "penetratingTrauma")
      .addClass("report__buttons")
      .text("Penetrating Trauma");
    const compartmentSyndromeButton = Html()
      .create("button")
      .addAttribute("id", "compartmentSyndrome")
      .addClass("report__buttons")
      .text("Compartment Syndrome");

    const vitalsSectionBlock = Html()
      .create("section")
      .addClass("vitals__section");

    const vitalsSectionTitle = Html()
      .create("h3")
      .text("Vitals Signs: ");

    const bpEntryLabel = Html()
      .create("label")
      .text("B/P");
    const bpInputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("name", "B/P");

    const hrEntryLabel = Html()
      .create("label")
      .text("H/R:");
    const hrInputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("name", "H/R");
    const spo2EntryLabel = Html()
      .create("label")
      .text("SPO2: ");
    const spo2InputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("name", "Spo2");
    const rEntryLabel = Html()
      .create("label")
      .text("R: ");
    const rInputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("name", "R");
    const gcsEntryLabel = Html()
      .create("label")
      .text("GCS: ");
    const gcsInputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("name", "GCS");
    const gluEntryLabel = Html()
      .create("label")
      .text("GLU: ");
    const gluInputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("name", "GLU");
    const narrativeEntryLabel = Html()
      .create("label")
      .text("Narrative: ");
    const narrativeInputField = Html()
      .create("input")
      .addAttribute("type", "text")
      .addAttribute("width", "100")
      .addAttribute("height", "300")
      .addAttribute("name", "narrative");

    const traumaSubmitButton = Html()
      .create("button")
      .addClass("trauma__submit-button")
      .text("Submit")
      .click(event => {
        const newMedicNum = "1234";
        const newDate = "May 1";
        const newComplaint = "MVC";
        const newSex = "M";
        const newAge = "21";

        // to do => add classes to input fields and get via query selector

        const bpEntryInputFieldValue = bpInputField.value;
        const hrEntryInputFieldValue = hrInputField.value;
        const spo2EntryInputFieldValue = spo2InputField.value;
        const rEntryInputFieldValue = rInputField.value;
        const gcsEntryInputFieldValue = gcsInputField.value;
        const gluEntryInputFieldValue = gluInputField.value;
        const narrativeEntryInputFieldValue = narrativeInputField.value;

        console.log("hry")

        Api().postRequest('http://localhost:8080/api/trauma-reports', {
          medicNum: newMedicNum,
          chiefComplaint: newComplaint,
          date: newDate,
          narrative: narrativeEntryInputFieldValue,
          sex: newSex,
          age: newAge,
          BP: bpEntryInputFieldValue,
          HR: hrEntryInputFieldValue,
          SpO2: spo2EntryInputFieldValue,
          RespRate: rEntryInputFieldValue,
          gcs: gcsEntryInputFieldValue,
          bloodSugar: gluEntryInputFieldValue,
        
        }, (traumaReport) => {
          this.renderTraumaFormPage()
        })
      });

    traumaFormContentBlock.addChild(traumaFormContainer);
    traumaFormContentBlock.addChild(traumaFormTitle);
    traumaFormContainer.addChild(traumaButtonContainer);
    traumaButtonContainer.addChild(mvcButton);
    traumaButtonContainer.addChild(gsnButton);
    traumaButtonContainer.addChild(fallButton);
    traumaButtonContainer.addChild(bluntForceButton);
    traumaButtonContainer.addChild(penetratingTraumaButton);
    traumaButtonContainer.addChild(compartmentSyndromeButton);

    vitalsSectionBlock.addChild(vitalsSectionTitle);
    vitalsSectionBlock.addChild(hrEntryLabel);
    vitalsSectionBlock.addChild(hrInputField);
    vitalsSectionBlock.addChild(bpEntryLabel);
    vitalsSectionBlock.addChild(bpInputField);
    vitalsSectionBlock.addChild(spo2EntryLabel);
    vitalsSectionBlock.addChild(spo2InputField);
    vitalsSectionBlock.addChild(rEntryLabel);
    vitalsSectionBlock.addChild(rInputField);
    vitalsSectionBlock.addChild(gcsEntryLabel);
    vitalsSectionBlock.addChild(gcsInputField);
    vitalsSectionBlock.addChild(gluEntryLabel);
    vitalsSectionBlock.addChild(gluInputField);
    vitalsSectionBlock.addChild(narrativeEntryLabel);
    vitalsSectionBlock.addChild(narrativeInputField);
    vitalsSectionBlock.addChild(traumaSubmitButton);
    traumaFormContentBlock.addChild(vitalsSectionBlock);

    return traumaFormContentBlock;
  }
}
