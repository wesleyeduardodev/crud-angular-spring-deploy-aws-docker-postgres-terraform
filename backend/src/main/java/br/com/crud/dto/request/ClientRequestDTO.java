package br.com.crud.dto.request;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ClientRequestDTO {

    @NotBlank(message = "Client name is required")
    private String name;

    private String cpfCnpj;

    private String telephone;

    private String email;
}