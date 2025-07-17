// src/components/Blog.jsx
import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
    return (
        <section className="blog-section" id="blog">
            <div className="blog-heading">
                <h2>Blogs</h2>
                <p style={{textAlign: 'center', fontSize: 18, marginBottom: 40}}>Here are some of my Medium blog posts.</p>
            </div>
            <div className="blog-cards">
                
                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/git-ve-github-ile-sürüm-kontrolüne-giriş-85c3c4090eff"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>Git ve GitHub ile Sürüm Kontrolüne Giriş</h3>
                    <p>Bu yazımda sizlere kısaca Git ve GitHub nedir ve temel kullanımı nasıldır bunlardan bahsedeceğim. İyi okumalar dilerim!</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-komutlar-1-de3b8daada8c"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: Komutlar -1</h3>
                    <p>Bu yazıda sizlere PostgreSQL’in ne olduğunu ve temel komutlarını anlatacağım.</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-komutlar-2-cd335b450e6e"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: Komutlar -2</h3>
                    <p>Bu yazıda, PostgreSQL kullanarak kütüphane veritabanı yönetimi için alt sorgular, JOIN’ler, INTERSECT ve EXCEPT, UNION ve ilişki oluşturmayı ele alacağız.</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-metinsel-fonksiyonlar-fbe926fff563"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: Metinsel Fonksiyonlar</h3>
                    <p> Bu yazıda PostgreSQL kullanarak metinsel (string) veriler üzerinde işlem yapabileceğimiz çeşitli fonksiyonları ele alacağız..</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-aritmetik-fonksiyonlar-2880c844255c"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: Aritmetik Fonksiyonlar</h3>
                    <p>Bu yazıda PostgreSQL kullanarak aritmetik işlemler ve fonksiyonlar üzerinde nasıl çalışabileceğimizi ele alacağız.</p>
                </a>


                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-view-oluşturma-alter-view-ve-değişken-atama-ee00d449fa6f"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: VIEW Oluşturma, ALTER VIEW ve Değişken Atama</h3>
                    <p>Bu yazıda PostgreSQL kullanarak VIEW oluşturma ve değiştirme, with check option, değişken oluşturma ve atama işlemlerini ve kullanımını ele alacağız.</p>
                </a>


                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-karar-yapıları-70bb61c1c42c"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: Karar Yapıları</h3>
                    <p>Bu yazıda sizlere karar yapılarının temel kullanımlarını tanımlayacak ve bu yapıların nasıl uygulanacağını örneklerle açıklayacağım.</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-while-ve-loop-yapısı-9c99bb32ce07"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: WHILE ve Loop Yapısı</h3>
                    <p>Bu yazımda while ve loop yapılarını inceleyip örneklendirmeler yapacağız.</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/postgresql-ile-veritabanı-yönetimi-procedure-kullanımı-d1b9826d7e71"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>PostgreSQL ile Veritabanı Yönetimi: PROCEDURE kullanımı</h3>
                    <p>Bu yazıda PostgreSQL’de PROCEDURE komutunun nasıl kullanılacağını açıklayacak ve örneklerle göstereceğiz.</p>
                </a>

                <a
                    className="blog-card"
                    href="https://medium.com/@harunzsln0/javascript-seçicilerle-dom-manipülasyonu-a8266b7e293a"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>JavaScript Selectors ile DOM Manipülasyonu</h3>
                    <p>Bu yazımızda DOM nedir ve nasıl DOM manipülasyonu yapabiliriz onlardan bahsedeceğim.</p>
                </a>

                

                
            </div>
        </section>
    );
};

export default Blog;
