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
      .text("Login")
      .click(event => {
        event.preventDefault();
        this.renderPageOptions();
      });

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
      .html("&copy 2019 In-Line Connect");
    footer.addChild(footerContent);
    return footer;
  }

  renderMVCQuestions() {
    const container = Html().select(".container");
    const contentBlock = Html()
      .create("section")
      .addClass("MVC__block");
    const seatPositionLabel = Html()
      .create("label")
      .text("Seat Position: ");
    const seatPositionInput = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "seatPosition")
      .addAttribute("type", "text")
      .addAttribute("name", "seat-position");

    const speedLabel = Html()
      .create("label")
      .text("Speed: ");
    const speedInput = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "speed")
      .addAttribute("type", "text")
      .addAttribute("name", "speed");

    const ambulatoryContentDiv = Html().create("div");
    const extricationContentDiv = Html().create("div");
    const immobilizationContentDiv = Html().create("div");

    const ambulatoryLabel = Html()
      .create("label")
      .text("Ambulatory: ");

    const ambulatoryInputTrue = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "ambulatoryTrue")
      .addAttribute("value", "True")
      .addAttribute("type", "radio")
      .addAttribute("name", "ambulatory");

    const ambulatoryInputFalse = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "ambulatoryFalse")
      .addAttribute("value", "False")
      .addAttribute("type", "radio")
      .addAttribute("name", "ambulatory");

    const immobilizedInputTrueText = Html()
      .create("label")
      .text("True");
    const immobilizedInputFalseText = Html()
      .create("label")
      .text("False");
    const ambulatoryInputTrueText = Html()
      .create("label")
      .text("True");
    const ambulatoryInputFalseText = Html()
      .create("label")
      .text("False");
    const extricationInputFalseText = Html()
      .create("label")
      .text("False");
    const extricationInputTrueText = Html()
      .create("label")
      .text("True");

    const prolongedExtricationLabel = Html()
      .create("label")
      .text("Prolonged Extrication: ");

    const prolongedExtricationInputTrue = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "prolonged-extrication-true")
      .addAttribute("type", "radio")
      .addAttribute("name", "prolonged extrication");

    const prolongedExtricationInputFalse = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "prolonged-extrication-false")
      .addAttribute("type", "radio")
      .addAttribute("name", "prolonged extrication");

    const immobilizedLabel = Html()
      .create("label")
      .text("Immobilized: ");

    const immobilizedInputTrue = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "immobilized-true")
      .addAttribute("type", "radio")
      .addAttribute("name", "immobilized")
      .text("True");

    const immobilizedInputFalse = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "immobilized-false")
      .addAttribute("type", "radio")
      .addAttribute("name", "immobilized")
      .text("False");



    contentBlock.addChild(seatPositionLabel);
    contentBlock.addChild(seatPositionInput);
    contentBlock.addChild(speedLabel);
    contentBlock.addChild(speedInput);

    contentBlock.addChild(ambulatoryContentDiv);
    ambulatoryContentDiv.addChild(ambulatoryLabel);
    ambulatoryContentDiv.addChild(ambulatoryInputTrue);
    ambulatoryContentDiv.addChild(ambulatoryInputTrueText);
    ambulatoryContentDiv.addChild(ambulatoryInputFalse);
    ambulatoryContentDiv.addChild(ambulatoryInputFalseText);

    contentBlock.addChild(extricationContentDiv);
    extricationContentDiv.addChild(prolongedExtricationLabel);
    extricationContentDiv.addChild(prolongedExtricationInputTrue);
    extricationContentDiv.addChild(extricationInputTrueText);
    extricationContentDiv.addChild(prolongedExtricationInputFalse);
    extricationContentDiv.addChild(extricationInputFalseText);

    contentBlock.addChild(immobilizationContentDiv);
    immobilizationContentDiv.addChild(immobilizedLabel);
    immobilizationContentDiv.addChild(immobilizedInputTrue);
    immobilizationContentDiv.addChild(immobilizedInputTrueText);
    immobilizationContentDiv.addChild(immobilizedInputFalse);
    immobilizationContentDiv.addChild(immobilizedInputFalseText);

    const traumaFormContent = this.renderTraumaFormContent();
    contentBlock.addChild(traumaFormContent);
    container.replace(contentBlock);
  }

  renderPageChiefComplaint() {
    const container = Html().select(".container");
    const chiefComplaintBlock = Html()
      .create("div")
      .addClass("chiefComplaintBlock");
    const chiefComplaintTitle = Html()
      .create("h2")
      .addClass("chiefComplaintBlock__title")
      .text("Chief Complaint");
    const cheifComplaintButtons = Html()
      .create("div")
      .addClass("chiefComplaintBlock__list");
    const mvcButton = Html()
      .create("button")
      .addAttribute("id", "MVC")
      .addClass("chiefComplaintBlock__list-button")
      .text("MVC")
      .click(event => {
        event.preventDefault();
        this.renderMVCQuestions();
      });
    const gsnButton = Html()
      .create("button")
      .addAttribute("id", "gsn")
      .addClass("chiefComplaintBlock__list-button")
      .text("GSN");
    const fallButton = Html()
      .create("button")
      .addAttribute("id", "fall")
      .addClass("chiefComplaintBlock__list-button")
      .text("Fall");
    const bluntForceButton = Html()
      .create("button")
      .addAttribute("id", "bluntForce")
      .addClass("chiefComplaintBlock__list-button")
      .text("Blunt-Force Trauma");
    const penetratingTraumaButton = Html()
      .create("button")
      .addAttribute("id", "penetratingTrauma")
      .addClass("chiefComplaintBlock__list-button")
      .text("Penetrating Trauma");
    const compartmentSyndromeButton = Html()
      .create("button")
      .addAttribute("id", "compartmentSyndrome")
      .addClass("chiefComplaintBlock__list-button")
      .text("Compartment Syndrome");

    cheifComplaintButtons.addChild(mvcButton);
    cheifComplaintButtons.addChild(gsnButton);
    cheifComplaintButtons.addChild(fallButton);
    cheifComplaintButtons.addChild(bluntForceButton);
    cheifComplaintButtons.addChild(penetratingTraumaButton);
    cheifComplaintButtons.addChild(compartmentSyndromeButton);

    chiefComplaintBlock.addChild(chiefComplaintTitle);
    chiefComplaintBlock.addChild(cheifComplaintButtons);
    container.replace(chiefComplaintBlock);
    return container;
  }

  renderPageHome() {
    const app = this.getAppContext();
    const wrapperDiv = this.getWrapperDiv();
    const mainHeader = this.renderHeader();
    const loginContent = this.renderLoginFields();
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(loginContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderPageOptions() {
    const app = this.getAppContext();
    const wrapperDiv = this.getWrapperDiv();
    const mainHeader = this.renderHeader();
    const optionsPageContent = this.renderPageOptionsContent();
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(optionsPageContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderPageOptionsContent() {
    const mainOptionsContent = Html().create("main");
    const optionsContainer = Html()
      .create("div")
      .addClass("container");
    const optionsCardiacButton = Html()
      .create("button")
      .addClass("buttons");
    const optionsCardiacLabel = Html()
      .create("p")
      .addAttribute("id", "cardiac__label")
      .addClass("options__labels")
      .text("Cardiac");
    const optionsTraumaButton = Html()
      .create("button")
      .addClass("buttons")
      .click((event) => {
        event.preventDefault();
        this.renderPageChiefComplaint();
      })

    const optionsTraumaLabel = Html()
      .create("p")
      .addAttribute("id", "trauma__label")
      .addClass("options__labels")
      .text("Trauma");
    const optionsMedicalButton = Html()
      .create("button")
      .addClass("buttons");
    const optionsMedicalLabel = Html()
      .create("p")
      .addAttribute("id", "medical__label")
      .addClass("options__labels")
      .text("Medical");

    mainOptionsContent.addChild(optionsContainer);
    optionsContainer.addChild(optionsCardiacButton);
    optionsCardiacButton.addChild(optionsCardiacLabel);
    optionsContainer.addChild(optionsTraumaButton);
    optionsTraumaButton.addChild(optionsTraumaLabel);
    optionsContainer.addChild(optionsMedicalButton);
    optionsMedicalButton.addChild(optionsMedicalLabel);

    return mainOptionsContent;
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
      .addClass("vitals__section-field")
      .addAttribute("id", "bpField")
      .addAttribute("type", "text")
      .addAttribute("name", "B/P");

    const hrEntryLabel = Html()
      .create("label")
      .text("H/R:");
    const hrInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addAttribute("id", "hrField")
      .addAttribute("type", "text")
      .addAttribute("name", "H/R");
    const spo2EntryLabel = Html()
      .create("label")
      .text("SPO2: ");
    const spo2InputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addAttribute("id", "spO2Field")
      .addAttribute("type", "text")
      .addAttribute("name", "Spo2");
    const rEntryLabel = Html()
      .create("label")
      .text("R: ");
    const rInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addAttribute("id", "rField")
      .addAttribute("type", "text")
      .addAttribute("name", "R");
    const gcsEntryLabel = Html()
      .create("label")
      .text("GCS: ");
    const gcsInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addAttribute("id", "gcsField")
      .addAttribute("type", "text")
      .addAttribute("name", "GCS");
    const gluEntryLabel = Html()
      .create("label")
      .text("GLU: ");
    const gluInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addAttribute("id", "gluField")
      .addAttribute("type", "text")
      .addAttribute("name", "GLU");
    const narrativeEntryLabel = Html()
      .create("label")
      .text("Narrative: ");
    const narrativeInputField = Html()
      .create("input")
      .addClass("vitals__section-fieldNar")
      .addAttribute("id", "narrativeField")
      .addAttribute("type", "text")
      .addAttribute("name", "narrative")
      .addAttribute("value", "");

    const speechButton = Html()
      .create('button')
      .text("push to speak")

    const traumaSubmitButton = Html()
      .create("button")
      .addClass("trauma__submit-button")
      .text("Submit")
      .click(event => {
        this.traumaClick(event);
      });

    traumaFormContentBlock.addChild(traumaFormContainer);
    traumaFormContentBlock.addChild(traumaFormTitle);

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
    vitalsSectionBlock.addChild(speechButton);
    vitalsSectionBlock.addChild(traumaSubmitButton);
    traumaFormContentBlock.addChild(vitalsSectionBlock);

    return traumaFormContentBlock;
  }

  traumaClick(event) {
    event.preventDefault();
    const newMedicNum = "1234";
    const newDate = "May 1";
    const newComplaint = "MVC";
    const newSex = "M";
    const newAge = "21";
    const bpEntryInputFieldValue = document.querySelector("#bpField").value;
    const hrEntryInputFieldValue = document.querySelector("#hrField").value;
    const spo2EntryInputFieldValue = document.querySelector("#spO2Field").value;
    const rEntryInputFieldValue = document.querySelector("#rField").value;
    const gcsEntryInputFieldValue = document.querySelector("#gcsField").value;
    const gluEntryInputFieldValue = document.querySelector("#gluField").value;
    const narrativeEntryInputFieldValue = document.querySelector(
      "#narrativeField"
    ).value;
    console.log(narrativeEntryInputFieldValue);
    Api().postRequest(
      "http://localhost:8080/api/trauma-reports",
      {
        medicNum: newMedicNum,
        chiefComplaint: newComplaint,
        date: newDate,
        narrative: narrativeEntryInputFieldValue,
        sex: newSex,
        age: newAge,
        bloodPressure: bpEntryInputFieldValue,
        heartRate: hrEntryInputFieldValue,
        spO2: spo2EntryInputFieldValue,
        respiratoryRate: rEntryInputFieldValue,
        gcs: gcsEntryInputFieldValue,
        bloodSugar: gluEntryInputFieldValue
      },
      traumaReport => {
        this.renderPageOptions();
      }
    );
  }
}
