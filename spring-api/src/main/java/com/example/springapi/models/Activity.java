package com.example.springapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "ACTIVITIES")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ACTIVITY_NAME")
    private String activityName;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "MONTH")
    private String month;

    @Column(name = "TOTAL_MINUTES")
    private Integer totalMinutes;

    @Column(name = "NOTES")
    private String notes;
}
