import React from 'react'
import './service.scss'

const ServicePage = () => {
  return (
    <div className='body_service'>
      <div className='content_service'>
        <div className='box'>
          <h2>01</h2>
          <h3>Instruct</h3>
          <p>Quý khách đăng nhập bằng số điện thoại và mật khẩu để đặt hàng. Nếu Quý khách lần đầu đặt hàng tại Con Cưng, xin vui lòng đăng ký tài khoản.
              Đăng ký tài khoản tại Con Cưng giúp quý khách xem lại các đơn hàng đã đặt và lưu giữ các sản phẩm đã cho vào giỏ hàng. 
              Cũng như kiểm tra tiền tiết kiệm mua hàng của mình từ chương trình "Tiết kiệm 1%" trên số điện thoại khách hàng. </p>
        </div>
        <div className='box'>
          <h2>02</h2>
          <h3>Security</h3>
          <p>Chúng tôi cam kết sẽ bảo mật các Thông tin cá nhân của khách hàng, 
            sẽ nỗ lực hết sức và sử dụng các biện pháp thích hợp để các thông tin mà khách hàng cung cấp cho chúng tôi trong quá trình sử dụng website & ứng dụng này được bảo mật và bảo vệ khỏi sự truy cập trái phép. 
            Tuy nhiên, Con Cưng không đảm bảo ngăn chặn được tất cả các truy cập trái phép. 
          </p>
        </div>
        <div className='box'>
          <h2>03</h2>
          <h3>Help</h3>
          <p>Mọi thắt mắt hay cần hỗ trợ xin hãy gọi (Hoặc nhắn tin) tới HOTLINE: 0988 661 ***, để được nhân viên hỗ trợ một cách nhanh chóng và an toàn.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicePage