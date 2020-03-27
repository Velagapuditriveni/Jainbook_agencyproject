package com.Stepdefinition;

import java.io.IOException;

import com.pages.Jainbook_Advancesearchpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Jainbook_Advancesearch {
	Jainbook_Advancesearchpage sp=new Jainbook_Advancesearchpage();
	@Given("^user launches the chrome application$")
	public void user_launches_the_chrome_application() {
		sp.launch("chrome");
		sp.launchpage();
		sp.login();
	}

	@When("^the user clicks advanced search$")
	public void the_user_clicks_advanced_search() throws InterruptedException, IOException {
		sp.search();
	}

	
	@Then("^the user fills the form and clicks on search button$")
	public void the_user_fills_the_form_and_clicks_on_search_button() throws InterruptedException, IOException {
		sp.filldetails();
	}

	@Then("^user logout the page and close the browser$")
	public void user_logout_the_page_and_close_the_browser() throws InterruptedException {
		sp.close_search();
	}


}
