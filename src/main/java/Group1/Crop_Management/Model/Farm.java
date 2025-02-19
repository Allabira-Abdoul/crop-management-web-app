package Group1.Crop_Management.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "farms")
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    @Column
    private String description;


    @OneToMany(mappedBy = "farm")
    @JsonManagedReference
    private List<Crop> crops;

    @OneToMany(mappedBy = "farm")
    @JsonManagedReference
    private List<Report> reports;

    @OneToMany(mappedBy = "farm")
    @JsonManagedReference
    private List<FarmTask> tasks;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
}
