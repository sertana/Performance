package cucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue= {"stepDefinitions"},
		plugin= {"html:target/NMVision-html-report"}
		)
public class testRunner {


}
