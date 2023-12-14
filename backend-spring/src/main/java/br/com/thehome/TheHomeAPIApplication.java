package br.com.thehome;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {"br.com.thehome.*", "com.thehome.*"})
@OpenAPIDefinition(

        servers = {@Server(url = "/", description = "Default Server URL")},
        info = @Info(
                title = "Swagger The Home - OpenAPI 3.0",
                version = "1.0.0",
                description = "API de Controle de Orçamentos",
                license = @License(name = "Apache 2.0", url = "http://www.apache.org/licenses/LICENSE-2.0.html")
        ))
@SecurityScheme(
        name = "basicAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "basic"
)
@SecurityRequirement(name = "basicAuth")
public class TheHomeAPIApplication {
    public static void main(String[] args) {
        SpringApplication.run(TheHomeAPIApplication.class, args);
    }
}
