package hawservice.repository;

import java.util.List;
import java.util.Optional;
import hawservice.model.UserDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserDTO, Long>
{
    Optional<UserDTO> findById(Long id);

    List<UserDTO> findAll();


}
