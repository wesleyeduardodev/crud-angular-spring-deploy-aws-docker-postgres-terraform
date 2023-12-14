package br.com.thehome.dto.response;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ClientResponseDTO {

    private Long id;

    private String name;

    private String cpfCnpj;

    private String telephone;

    private String email;
}