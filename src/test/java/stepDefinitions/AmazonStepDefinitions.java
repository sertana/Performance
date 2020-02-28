package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonStepDefinitions {
	public WebDriver driver;
	
	@Given("^Initialize the browser with Google Chrome$")
	public void initialize_the_browser_with_Google_Chrome() throws Throwable {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	}

	@When("^User navigates to amazon\\.com$")
	public void user_navigates_to_amazon_com() throws Throwable {
		driver.get("https://www.amazon.com");
		driver.manage().window().maximize();
	}

	@When("^User inputs \"([^\"]*)\" in the search box$")
	public void user_inputs_in_the_search_box(String arg1) throws Throwable {
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys(arg1);
	}

	@When("^User clicks on the Search Button$")
	public void user_clicks_on_the_Search_Button() throws Throwable {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("^Results are displayed$")
	public void results_are_displayed() throws Throwable {
		String name = driver.findElement(By.xpath("//*[@id=\'search\']/span/span/h1/div/div[1]/div/div/span[1]"))
				.getText();
		System.out.println(name);
		Assert.assertTrue(name.contains("results"));
	}

	@Then("^Number of Results is a positive integer$")
	public void number_of_Results_is_a_positive_integer() throws Throwable {
			int count = driver.findElements(By.xpath("//img[@class='s-image']")).size();
			Assert.assertTrue(count > 0);
			System.out.println(count);
	}
	@Then("^Search box is empty, browser should remain on amazon home page\\.$")
	public void search_box_is_empty_browser_should_remain_on_amazon_home_page() throws Throwable {
	    String title = driver.getTitle();
	    System.out.println(title);
	}
	

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		driver.close();;
	}


}










