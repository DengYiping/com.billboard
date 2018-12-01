package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@PrimaryKeyJoinColumn
@Data
public class OnlineAd extends AdSource {
    @Column
    private Long traffic;

    @ElementCollection
    @CollectionTable(name = "online_ad_tag"
            , joinColumns = @JoinColumn(name = "ad_id"))
    private List<String> tags;
}
