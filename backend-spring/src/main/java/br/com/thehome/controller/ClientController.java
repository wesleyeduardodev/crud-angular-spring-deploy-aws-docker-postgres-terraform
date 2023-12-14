package br.com.thehome.controller;
import br.com.thehome.dto.request.ClientRequestDTO;
import br.com.thehome.dto.response.ClientResponseDTO;
import br.com.thehome.facade.ClientFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ClientController implements ClientAPI {

    @Autowired
    private ClientFacade pedidoFacade;

    @Override
    public ResponseEntity<List<ClientResponseDTO>> findAll() {
        return ResponseEntity.ok(pedidoFacade.findAll());
    }

    @Override
    public ResponseEntity<ClientResponseDTO> findById(Long id) {
        return ResponseEntity.ok(pedidoFacade.findById(id));
    }

    @Override
    public ResponseEntity<ClientResponseDTO> create(ClientRequestDTO clientRequest) {
        return ResponseEntity.ok(pedidoFacade.create(clientRequest));
    }

    @Override
    public ResponseEntity<ClientResponseDTO> update(Long id, ClientRequestDTO clientRequest) {
        return ResponseEntity.ok(pedidoFacade.update(id, clientRequest));
    }

    @Override
    public ResponseEntity<?> delete(Long id) {
        return ResponseEntity.ok(pedidoFacade.delete(id));
    }
}
