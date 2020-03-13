import React, { Component } from "react";
import './BlogPost.css';
import Post from "./Post";

class BlogPost extends Component {
    state = {
        ListArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "tes",
            body: "123"
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    ListArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
            .then(res => {
                this.componentDidMount()
            })
    }
    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.componentDidMount();
            })
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="tittle" className="col-sm-2 col-form-label">judul</label>
                        <div>
                            <input type="text" className="form-control" id="tittle" name="title" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="tittle" className="col-sm-2 col-form-label">isi</label>
                        <div>
                            <textarea className="form-control" id="body" cols="30" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.ListArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div >
        )
    }
}

export default BlogPost;