package br.com.thehome.facade;
import br.com.thehome.dto.request.ClientRequestDTO;
import br.com.thehome.dto.response.ClientResponseDTO;
import br.com.thehome.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClientFacade {

    @Autowired
    private ClientService clientService;

    public List<ClientResponseDTO> findAll() {
        return clientService.findAll();
    }

    public ClientResponseDTO findById(Long id) {
        return clientService.findById(id);
    }

    public ClientResponseDTO create(ClientRequestDTO requestDTO) {
        return clientService.createEntityFromRequest(requestDTO);
    }

    public ClientResponseDTO update(Long id, ClientRequestDTO clientRequest) {
        return clientService.update(id, clientRequest);
    }

    public ClientResponseDTO delete(Long id) {
        clientService.delete(id);
        return ClientResponseDTO.builder().build();
    }
}
