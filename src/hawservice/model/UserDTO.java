package hawservice.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class UserDTO
{
    @Id
    private Long id;

    private String code;

    private String email;

    private String first_name;

    private String last_name;

    private String grad_year;

    private String geo_location_old;

    private String geo_location_new;

    private String password;

    private boolean enabled;

}
