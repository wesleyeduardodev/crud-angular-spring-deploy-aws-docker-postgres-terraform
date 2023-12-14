package br.com.crud.controller;
import br.com.crud.dto.request.ClientRequestDTO;
import br.com.crud.dto.response.ClientResponseDTO;
import br.com.crud.facade.ClientFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ClientController implements ClientAPI {

    @Autowired
    private ClientFacade clientFacade;

    @Override
    public ResponseEntity<List<ClientResponseDTO>> findAll() {
        return ResponseEntity.ok(clientFacade.findAll());
    }

    @Override
    public ResponseEntity<ClientResponseDTO> findById(Long id) {
        return ResponseEntity.ok(clientFacade.findById(id));
    }

    @Override
    public ResponseEntity<ClientResponseDTO> create(ClientRequestDTO clientRequest) {
        return ResponseEntity.ok(clientFacade.create(clientRequest));
    }

    @Override
    public ResponseEntity<ClientResponseDTO> update(Long id, ClientRequestDTO clientRequest) {
        return ResponseEntity.ok(clientFacade.update(id, clientRequest));
    }

    @Override
    public ResponseEntity<?> delete(Long id) {
        return ResponseEntity.ok(clientFacade.delete(id));
    }
}
